import { useState, useEffect } from 'react';
import './Result.css';
import loading1 from '../Img/loading1.png';
import loading2 from '../Img/loading2.png';
import loading3 from '../Img/loading3.png';
import loading4 from '../Img/loading4.png';
import loading5 from '../Img/loading5.png';
import loading6 from '../Img/loading6.png';
import loading7 from '../Img/loading7.png';
import loading8 from '../Img/loading8.png';
import loading9 from '../Img/loading9.png';
import levelcrow from '../Img/levelcrow.png';
import leveldungbeetle from '../Img/leveldungbeetle.png';
import levelmeerkat from '../Img/levelmeerkat.png';
import levelparesseux from '../Img/levelparesseux.png';
import levelpuppy from '../Img/levelpuppy.png';
import levelsquirrel from '../Img/levelsquirrel.png';
import levelsunfish from '../Img/levelsunfish.png';
import crow_text from '../Img/crow_text.png';
import dungbeetle_text from '../Img/dungbeetle_text.png';
import meerkat_text from '../Img/meerkat_text.png';
import paresseux_text from '../Img/paresseux_text.png';
import puppy_text from '../Img/puppy_text.png';
import squirrel_text from '../Img/squirrel_text.png';
import sunfish_text from '../Img/sunfish_text.png';
import shareMethod from '../Img/shareMethod.png';
import KakaoShareButton from '../KakaoShareButton';
import copyLink from '../Img/copyLink.png';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import axios from 'axios';

function Result (props) {

    console.log(props);

    const nickname = props.match.params.nickname;
    const number = props.match.params.img;
    
    const [loadingImg, setLoadingImg] = useState(0);

    const [clientResult, setClientResult] = useState();

    const [loading, setLoading] = useState(props.location.state);
    
    const [topType, setTopType] = useState();
    
    const [totalLength, setTotalLength] = useState();

    const levelimg = [
        levelcrow,
        leveldungbeetle,
        levelmeerkat,
        levelparesseux,
        levelpuppy,
        levelsquirrel,
        levelsunfish
    ];

    const textimg = [
        crow_text,
        dungbeetle_text,
        meerkat_text,
        paresseux_text,
        puppy_text,
        squirrel_text,
        sunfish_text
    ];

    useEffect(() => {
        setLoadingImg(state => state+1);
        axios.post('https://backend-survey.herokuapp.com/clientresult', {
            user_nickname: nickname
        }).then(function(res){
            setClientResult(res.data.clientresult);
            
        }).catch(function (error) {
            console.log(error);
        });
            setTimeout(() => {
                setLoadingImg(state => state+1);
            }, 300);
            setTimeout(() => {
            axios.get('https://backend-survey.herokuapp.com/orderby', {
            }).then(function(res) {
                setTopType(res.data.topType);
            }).catch(function (error){
                console.log(error);
            })
            setLoadingImg(state => state+1);
        }, 700);
        setTimeout(() => {
            axios.get('https://backend-survey.herokuapp.com/total', {
            }).then(function (res) {
                setTotalLength(res.data.clientTotal);
            }).catch(function (error) {
                console.log(error);
            })
            setLoadingImg(state => state+1);
        }, 1200);
        setTimeout(() => {
            setLoadingImg(state => state+1);
        }, 1800);
        setTimeout(() => {
            setLoadingImg(state => state+1);
        }, 2500);
        setTimeout(() => {
            setLoadingImg(state => state+1);
        }, 3200);
        setTimeout(() => {
            setLoadingImg(state => state+1);
        }, 4000);
        setTimeout(() => {
            setLoadingImg(state => state+1);
        }, 4800);
        setTimeout(() => {
            setLoading("good");
        }, 5600);
    }, [nickname]);
    console.log(clientResult);
    console.log(topType);
    
    // console.log(result_array.indexOf(ImgName[0].value));

    const linkAlert = () => {
        alert("??????????????? ?????????????????????.")
    }
    
    const totalRank = () => {
        props.history.push(`/rank/${nickname}/${number}`, [topType, totalLength]);
    }

    return (
        <div className="Result_area">
            {loading ? (
                <>
                <div className="result">
                    <span className="result_box_title">???????????? ?????????</span>
                    <div className="result_box">
                        <span className="nickname_title">
                            {nickname} ??????
                        </span>
                        <img src= {levelimg[number]} className="result_img" alt="result_img" />
                        <div className="sentence">
                            <img src = {textimg[number]} className="sentence_img" alt="sentence_img" />
                        </div>
                        <div className="type_per">
                            ?????? ?????? ?????? 38%
                        </div>
                    </div>
                </div>


                <div className="container">
                <div className="result_share">
                    <span className="result_share_title">
                        ??? ?????? ????????????
                    </span>
                    <div className="sharebtn_box">
                        <div className="kakaobtn">
                            <KakaoShareButton />
                        </div>
                        <div className="urlbtn">
                            <CopyToClipboard text={`https://hscandoit.co.kr${props.match.url}`}>
                            <button id="copy_url" className="btn_copyurl" style={{backgroundImage: {copyLink}}} onClick={linkAlert}>
                                <img className="copyurl" src={copyLink} alt="Link-share-icon" />
                            </button>
                            </CopyToClipboard>
                        </div>
                    </div>
                </div>
                <div className="result__box">
                    <div className="most_type">
                        <span className="span_most_type">
                            ?????? ?????? ??????????
                        </span>
                        <div className="div_most_type">
                            {topType ? <img src={`${topType[0].img}`} className = "img_most_type" alt="most_type" /> : <span>?????? 1???????</span>}
                        </div>
                    </div>
                    <div>
                        <button type="button" className="rank" onClick={totalRank}>?????? ?????? ????????????</button>
                    </div>
                    <div>
                        <a href="./">
                            <button type="button" className="return_button">?????? ???????????????</button>
                        </a>
                    </div>
                </div>
                    <div className="pointshare">
                        <img src = {shareMethod} className="shareMethod" alt = "shareMethod" />
                    </div>
                </div>
                </>
            ) : (
            <div className="loading">
            {
                loadingImg === 1 ? <img src={loading1} alt ="loading" />
                : 
                loadingImg === 2 ? <img src={loading2} alt ="loading" />
                :
                loadingImg === 3 ? <img src={loading3} alt ="loading" />
                :
                loadingImg === 4 ? <img src={loading4} alt ="loading" />
                :
                loadingImg === 5 ? <img src={loading5} alt ="loading" />
                :
                loadingImg === 6 ? <img src={loading6} alt ="loading" />
                :
                loadingImg === 7 ? <img src={loading7} alt ="loading" />
                :   
                loadingImg === 8 ? <img src={loading8} alt ="loading" />
                :
                <img src={loading9} alt ="loading" />
            }
            </div>
            ) }  
        </div>  
    ) 
}

export default Result;