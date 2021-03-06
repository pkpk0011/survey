import React, { useState } from 'react';
import './Test.css';
import axios from 'axios';

function Test (props) {

    const [Page, setPage] = useState(1);

    const nickname = props.match.params.nickname;

    //const [result_Img, setResult_Img] = useState();
    let result_Img;

    const [clientResult, setClientResult] = useState({
        meerkat: 0,
        sunfish: 0,
        crow: 0,
        dungbeetle: 0,
        paresseux: 0,
        squirrel: 0,
        puppy: 0
        });

    const clientImg = [
    "https://datamond-surveyimg.s3.ap-northeast-2.amazonaws.com/result_crow.png", 
    "https://datamond-surveyimg.s3.ap-northeast-2.amazonaws.com/result_dungbeetle.png", 
    "https://datamond-surveyimg.s3.ap-northeast-2.amazonaws.com/result_meerkat.png", 
    "https://datamond-surveyimg.s3.ap-northeast-2.amazonaws.com/result_paresseux.png", 
    "https://datamond-surveyimg.s3.ap-northeast-2.amazonaws.com/result_puppy.png",
    "https://datamond-surveyimg.s3.ap-northeast-2.amazonaws.com/result_squirrel.png", 
    "https://datamond-surveyimg.s3.ap-northeast-2.amazonaws.com/result_sunfish.png"
    ];
    
    const result_name = [
        "crow",
        "dungbeetle",
        "meerkat",
        "paresseux",
        "puppy",
        "squirrel",
        "sunfish",
    ];
    
    const result_sentence = [
        "https://datamond-surveyimg.s3.ap-northeast-2.amazonaws.com/sentence_crow.png",
        "https://datamond-surveyimg.s3.ap-northeast-2.amazonaws.com/sentence_dungbeetle.png",
        "https://datamond-surveyimg.s3.ap-northeast-2.amazonaws.com/sentence_meerkat.png",
        "https://datamond-surveyimg.s3.ap-northeast-2.amazonaws.com/sentence_paresseux.png",
        "https://datamond-surveyimg.s3.ap-northeast-2.amazonaws.com/sentence_puppy.png",
        "https://datamond-surveyimg.s3.ap-northeast-2.amazonaws.com/sentence_squirrel.png",
        "https://datamond-surveyimg.s3.ap-northeast-2.amazonaws.com/sentence_sunfish.png"
    ];
    
    

    const [back1, setBack1] = useState();
    const [back2, setBack2] = useState();
    const [back3, setBack3] = useState();
    const [back4, setBack4] = useState();
    const [back5, setBack5] = useState();
    const [back6, setBack6] = useState();
    const [back7, setBack7] = useState();
    const [back8, setBack8] = useState();
    const [back9, setBack9] = useState();
    const [back10, setBack10] = useState();

    const oneButton = () => {
        if (Page === 1) {
            setPage(Page+1);
            setClientResult({ ...clientResult, meerkat: clientResult.meerkat+3 });
            setBack1(clientResult);
        }
        else if (Page === 2) {
            setPage(Page+1);
            setClientResult({ ...clientResult, dungbeetle: clientResult.dungbeetle+3 });
            setBack2(clientResult);
        }
        else if (Page === 3) {
            setPage(Page+1);
            setClientResult({ ...clientResult, crow: clientResult.crow+3 });
            setBack3(clientResult);
        }
        else if (Page === 4) {
            setPage(Page+1);
            setClientResult({ ...clientResult, meerkat: clientResult.meerkat+3 });
            setBack4(clientResult);
        }
        else if (Page === 5) {
            setPage(Page+1);
            setClientResult({ ...clientResult, crow: clientResult.crow+3 });
            setBack5(clientResult);
        }
        else if (Page === 6) {
            setPage(Page+1);
            setClientResult({ ...clientResult, meerkat: clientResult.meerkat+3 });
            setBack6(clientResult);
        }
        else if (Page === 7) {
            setPage(Page+1);
            setClientResult({ ...clientResult, puppy: clientResult.puppy+3 });
            setBack7(clientResult);
        }
        else if (Page === 8) {
            setPage(Page+1);
            setClientResult({ ...clientResult, crow: clientResult.crow+3 });
            setBack8(clientResult);
        }
        else if (Page === 9) {
            setPage(Page+1);
            setClientResult({ ...clientResult, puppy: clientResult.puppy+3 });
            setBack9(clientResult);
        }
        else if (Page === 10) {
            setPage(Page+1);
            setClientResult({ ...clientResult, puppy: clientResult.puppy+3, dungbeetle: clientResult.dungbeetle+3 });
            setBack10(clientResult);
        }
        else {

            const result_array = [
                clientResult.crow,
                clientResult.dungbeetle,
                clientResult.meerkat+3,
                clientResult.paresseux,
                clientResult.puppy,
                clientResult.squirrel,
                clientResult.sunfish,
            ];
        
            const resultImg = [
                { name: "crow", value: clientResult.crow }, 
                { name: "dungbeetle", value: clientResult.dungbeetle },
                { name: "meerkat", value: clientResult.meerkat+3 },
                { name: "paresseux", value: clientResult.paresseux },
                { name: "puppy", value: clientResult.puppy },
                { name: "squirrel", value: clientResult.squirrel },
                { name: "sunfish", value: clientResult.sunfish }
            ];

            var sortingField = "value";
            
            const ImgName = resultImg.sort(function(a, b) { // ????????????
                return b[sortingField] - a[sortingField];
            });
            
            let resultname = result_name[result_array.indexOf(ImgName[0].value)];
            let usertype = result_name[result_array.indexOf(ImgName[0].value)];
            let userimg = clientImg[result_array.indexOf(ImgName[0].value)];
            let userimgsentence = result_sentence[result_array.indexOf(ImgName[0].value)];
            //setResult_Img(result_array.indexOf(ImgName[0].value));
            result_Img = result_array.indexOf(ImgName[0].value);
            console.log(result_Img);
            
            axios.post('https://backend-survey.herokuapp.com/create', {
                user_nickname: nickname,
                user_result: resultname,
                user_img: userimg,
                user_img_sentence: userimgsentence
            }).then(function () {
                }).catch(function (error) {
                    console.log(error);
                });
            axios.post('https://backend-survey.herokuapp.com/update', {
                    type: usertype
                }).then(function () {
                }).catch(function (error) {
                    console.log(error);
                });

                props.history.push(`/result/${nickname}/${result_Img}`);
        }
    }
    const twoButton = () => {
        if (Page === 1) {
            setPage(Page+1);
            setClientResult({ ...clientResult, dungbeetle: clientResult.dungbeetle+3, squirrel: clientResult.squirrel+3 });
            setBack1(clientResult);
        }
        else if (Page === 2) {
            setPage(Page+1);
            setClientResult({ ...clientResult, puppy: clientResult.puppy+3 });
            setBack2(clientResult);
        }
        else if (Page === 3) {
            setPage(Page+1);
            setClientResult({ ...clientResult, sunfish: clientResult.sunfish+3 });
            setBack3(clientResult);
        }
        else if (Page === 4) {
            setPage(Page+1);
            setClientResult({ ...clientResult, dungbeetle: clientResult.dungbeetle+3 });
            setBack4(clientResult);
        }
        else if (Page === 5) {
            setPage(Page+1);
            setClientResult({ ...clientResult, squirrel: clientResult.squirrel+3 });
            setBack5(clientResult);
        }
        else if (Page === 6) {
            setPage(Page+1);
            setClientResult({ ...clientResult, puppy: clientResult.puppy+3 });
            setBack6(clientResult);
        }
        else if (Page === 7) {
            setPage(Page+1);
            setClientResult({ ...clientResult, squirrel: clientResult.squirrel+3 });
            setBack7(clientResult);
        }
        else if (Page === 8) {
            setPage(Page+1);
            setClientResult({ ...clientResult, puppy: clientResult.puppy+3 });
            setBack8(clientResult);
        }
        else if (Page === 9) {
            setPage(Page+1);
            setClientResult({ ...clientResult, crow: clientResult.crow+3 });
            setBack9(clientResult);
        }
        else if (Page === 10) {
            setPage(Page+1);
            setClientResult({ ...clientResult, crow: clientResult.crow+3 });
            setBack10(clientResult);
        }
        else {
            const result_array = [
                clientResult.crow,
                clientResult.dungbeetle+3,
                clientResult.meerkat,
                clientResult.paresseux,
                clientResult.puppy,
                clientResult.squirrel,
                clientResult.sunfish,
            ];
        
            const resultImg = [
                { name: "crow", value: clientResult.crow }, 
                { name: "dungbeetle", value: clientResult.dungbeetle+3 },
                { name: "meerkat", value: clientResult.meerkat },
                { name: "paresseux", value: clientResult.paresseux },
                { name: "puppy", value: clientResult.puppy },
                { name: "squirrel", value: clientResult.squirrel },
                { name: "sunfish", value: clientResult.sunfish }
            ];
            
            var sortingField = "value";
            
            const ImgName = resultImg.sort(function(a, b) { // ????????????
                return b[sortingField] - a[sortingField];
            });
        
            let resultname = result_name[result_array.indexOf(ImgName[0].value)];
            let usertype = result_name[result_array.indexOf(ImgName[0].value)];
            let userimg = clientImg[result_array.indexOf(ImgName[0].value)];
            let userimgsentence = result_sentence[result_array.indexOf(ImgName[0].value)];
            result_Img = result_array.indexOf(ImgName[0].value);


            axios.post('https://backend-survey.herokuapp.com/create', {
                user_nickname: nickname,
                user_result: resultname,
                user_img: userimg,
                user_img_sentence: userimgsentence
            }).then(function () {
                }).catch(function (error) {
                    console.log(error);
                });
            axios.post('https://backend-survey.herokuapp.com/update', {
                    type: usertype
                }).then(function () {
                }).catch(function (error) {
                    console.log(error);
                });

                props.history.push(`/result/${nickname}/${result_Img}`);
        }
    }
    const threeButton = () => {
        if (Page === 1) {
            setPage(Page+1);
            setClientResult({ ...clientResult, sunfish: clientResult.sunfish+3 });
            setBack1(clientResult);
        }
        else if (Page === 2) {
            setPage(Page+1);
            setClientResult({ ...clientResult, meerkat: clientResult.meerkat+3 });
            setBack2(clientResult);
        }
        else if (Page === 3) {
            setPage(Page+1);
            setClientResult({ ...clientResult, puppy: clientResult.puppy+3 });
            setBack3(clientResult);
        }
        else if (Page === 4) {
            setPage(Page+1);
            setClientResult({ ...clientResult, squirrel: clientResult.squirrel+3 });
            setBack4(clientResult);
        }
        else if (Page === 5) {
            setPage(Page+1);
            setClientResult({ ...clientResult, dungbeetle: clientResult.dungbeetle+3 });
            setBack5(clientResult);
        }
        else if (Page === 6) {
            setPage(Page+1);
            setClientResult({ ...clientResult, crow: clientResult.crow+3 });
            setBack6(clientResult);
        }
        else if (Page === 7) {
            setPage(Page+1);
            setClientResult({ ...clientResult, dungbeetle: clientResult.dungbeetle+3 });
            setBack7(clientResult);
        }
        else if (Page === 8) {
            setPage(Page+1);
            setClientResult({ ...clientResult, dungbeetle: clientResult.dungbeetle+3 });
            setBack8(clientResult);
        }
        else if (Page === 9) {
            setPage(Page+1);
            setClientResult({ ...clientResult, meerkat: clientResult.meerkat+3 });
            setBack9(clientResult);
        }
        else if (Page === 10) {
            setPage(Page+1);
            setClientResult({ ...clientResult, squirrel: clientResult.squirrel+3 });
            setBack10(clientResult);
        }
        else {
            const result_array = [
                clientResult.crow+3,
                clientResult.dungbeetle,
                clientResult.meerkat,
                clientResult.paresseux,
                clientResult.puppy,
                clientResult.squirrel,
                clientResult.sunfish,
            ];
        
            const resultImg = [
                { name: "crow", value: clientResult.crow+3 }, 
                { name: "dungbeetle", value: clientResult.dungbeetle },
                { name: "meerkat", value: clientResult.meerkat },
                { name: "paresseux", value: clientResult.paresseux },
                { name: "puppy", value: clientResult.puppy },
                { name: "squirrel", value: clientResult.squirrel },
                { name: "sunfish", value: clientResult.sunfish }
            ];
            
            var sortingField = "value";
            
            const ImgName = resultImg.sort(function(a, b) { // ????????????
                return b[sortingField] - a[sortingField];
            });
        
            let resultname = result_name[result_array.indexOf(ImgName[0].value)];
            let usertype = result_name[result_array.indexOf(ImgName[0].value)];
            let userimg = clientImg[result_array.indexOf(ImgName[0].value)];
            let userimgsentence = result_sentence[result_array.indexOf(ImgName[0].value)];
            result_Img = result_array.indexOf(ImgName[0].value);

            axios.post('https://backend-survey.herokuapp.com/create', {
                user_nickname: nickname,
                user_result: resultname,
                user_img: userimg,
                user_img_sentence: userimgsentence
            }).then(function () {
                }).catch(function (error) {
                    console.log(error);
                });
            axios.post('https://backend-survey.herokuapp.com/update', {
                    type: usertype
                }).then(function () {
                }).catch(function (error) {
                    console.log(error);
                });

                props.history.push(`/result/${nickname}/${result_Img}`);
        }
    }
    const fourButton = () => {
        if (Page === 1) {
            setPage(Page+1);
            setClientResult({ ...clientResult, dungbeetle: clientResult.dungbeetle+3, crow: clientResult.crow+3 });
            setBack1(clientResult);
        }
        else if (Page === 2) {
            setPage(Page+1);
            setClientResult({ ...clientResult, crow: clientResult.crow+3 });
            setBack2(clientResult);
        }
        else if (Page === 3) {
            setPage(Page+1);
            setClientResult({ ...clientResult, paresseux: clientResult.paresseux+10 });
            setBack3(clientResult);
        }
        else if (Page === 4) {
            setPage(Page+1);
            setClientResult({ ...clientResult, sunfish: clientResult.sunfish+3 });
            setBack4(clientResult);
        }
        else if (Page === 5) {
            setPage(Page+1);
            setClientResult({ ...clientResult, paresseux: clientResult.paresseux+10 });
            setBack5(clientResult);
        }
        else if (Page === 6) {
            setPage(Page+1);
            setClientResult({ ...clientResult, dungbeetle: clientResult.dungbeetle+3 });
            setBack6(clientResult);
        }
        else if (Page === 7) {
            setPage(Page+1);
            setClientResult({ ...clientResult, sunfish: clientResult.sunfish+3 });
            setBack7(clientResult);
        }
        else if (Page === 8) {
            setPage(Page+1);
            setClientResult({ ...clientResult, sunfish: clientResult.sunfish+3, meerkat: clientResult.meerkat+3 });
            setBack8(clientResult);
        }
        else if (Page === 9) {
            setPage(Page+1);
            setClientResult({ ...clientResult, sunfish: clientResult.sunfish+3 });
            setBack9(clientResult);
        }
        else if (Page === 10) {
            setPage(Page+1);
            setClientResult({ ...clientResult, meerkat: clientResult.meerkat+3 });
            setBack10(clientResult);
        }
        else {
            const result_array = [
                clientResult.crow,
                clientResult.dungbeetle,
                clientResult.meerkat,
                clientResult.paresseux,
                clientResult.puppy,
                clientResult.squirrel,
                clientResult.sunfish+3,
            ];
        
            const resultImg = [
                { name: "crow", value: clientResult.crow }, 
                { name: "dungbeetle", value: clientResult.dungbeetle },
                { name: "meerkat", value: clientResult.meerkat },
                { name: "paresseux", value: clientResult.paresseux },
                { name: "puppy", value: clientResult.puppy },
                { name: "squirrel", value: clientResult.squirrel },
                { name: "sunfish", value: clientResult.sunfish+3 }
            ];
            
            var sortingField = "value";
            
            const ImgName = resultImg.sort(function(a, b) { // ????????????
                return b[sortingField] - a[sortingField];
            });
        
            let resultname = result_name[result_array.indexOf(ImgName[0].value)];
            let usertype = result_name[result_array.indexOf(ImgName[0].value)];
            let userimg = clientImg[result_array.indexOf(ImgName[0].value)];
            let userimgsentence = result_sentence[result_array.indexOf(ImgName[0].value)];
            result_Img = result_array.indexOf(ImgName[0].value);
            
            axios.post('https://backend-survey.herokuapp.com/create', {
                user_nickname: nickname,
                user_result: resultname,
                user_img: userimg,
                user_img_sentence: userimgsentence
            }).then(function () {
                }).catch(function (error) {
                    console.log(error);
                });
            axios.post('https://backend-survey.herokuapp.com/update', {
                    type: usertype
                }).then(function () {
                }).catch(function (error) {
                    console.log(error);
                });

                props.history.push(`/result/${nickname}/${result_Img}`);
        }
    }

    const PageBack = () => {
        setPage(Page-1);
        if (Page === 2) {
            setClientResult(back1);
        }
        else if (Page === 3) {
            setPage(Page-1);
            setClientResult(back2);
        }
        else if (Page === 4) {
            setPage(Page-1);
            setClientResult(back3);
        }
        else if (Page === 5) {
            setPage(Page-1);
            setClientResult(back4);
        }
        else if (Page === 6) {
            setPage(Page-1);
            setClientResult(back5);
        }
        else if (Page === 7) {
            setPage(Page-1);
            setClientResult(back6);
        }
        else if (Page === 8) {
            setPage(Page-1);
            setClientResult(back7);
        }
        else if (Page === 9) {
            setPage(Page-1);
            setClientResult(back8);
        }
        else if (Page === 10) {
            setPage(Page-1);
            setClientResult(back9);
        }
        else {
            setPage(Page-1);
            setClientResult(back10);
        }
    }

    switch (Page) {
        case 1 : return (
            <div className="Test_area">
                <div className="test_title">
                    ???????????? ?????????
                </div>
                    <div className="status">
                    <div className="back">
                        
                    </div>
                        <div className = "statusBar">
                            <div className = "done" style={{width:`${100 / 11 * (Page)}%`}} />
                        </div>
                        <div className="statusBar_Num">
                            {Page} / 11
                        </div>
                    </div>
                <div className="content_box">
                        <div className="subject">
                            <span className="subject1">?????? ??? ????????? ??????...</span>
                            
                            <span className="subject2">?????? ?????????...!</span>
                        </div>
                    <div className="btn_box">
                        <button className = "one_btn" onClick={oneButton}>??????????????? ????????????! ????????????!!!</button>
                        <button className = "two_btn" onClick={twoButton}>???????????? ????????????! ???????????? ??????!</button>
                        <button className = "three_btn" onClick={threeButton}>?????? ????????? ?????? ?????? ??????</button>
                        <button className = "four_btn"onClick={fourButton}>?????? ?????? ???????????? ????????? ????????????</button>
                    </div>
                </div>
            </div>
        );
        case 2 : return (
            <div className="Test_area">
                <div className="test_title">
                    ???????????? ?????????
                </div>
                <div className="status">
                    <div className="back">
                        <button className="back_btn" onClick={PageBack}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                    </div>
                    <div className = "statusBar">
                        <div className = "done" style={{width:`${100 / 11 * (Page)}%`}} />
                    </div>
                    <div className="statusBar_Num">
                        {Page} / 11
                    </div>
                </div>
                <div className="content_box">
                        <div className="subject">
                            <span className="subject1">????????? ?????? ??? ??????!</span>
                            <span className="subject2">1?????? ??????????</span>
                        </div>
                    <div className="btn_box">
                        <button className = "one_btn" onClick={oneButton}>?????? ??????</button>
                        <button className = "two_btn" onClick={twoButton}>?????? ??????</button>
                        <button className = "three_btn" onClick={threeButton}>???????????? ??? ????!</button>
                        <button className = "four_btn"onClick={fourButton}>??? ????????? ??????...?</button>
                    </div>
                </div>
            </div>
        );
        case 3 : return (
            <div className="Test_area">
                <div className="test_title">
                    ???????????? ?????????
                </div>
                <div className="status">
                    <div className="back">
                        <button className="back_btn" onClick={PageBack}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                    </div>
                    <div className = "statusBar">
                        <div className = "done" style={{width:`${100 / 11 * (Page)}%`}} />
                    </div>
                    <div className="statusBar_Num">
                        {Page} / 11
                    </div>
                </div>
                <div className="content_box">
                        <div className="subject">
                            <span className="subject1">?????? ??? ?????????</span>
                            <span className="subject2">???????????? ?????? ????????????!!!</span>
                        </div>
                    <div className="btn_box">
                        <button className = "one_btn" onClick={oneButton}>????????? ????????????! ??? ?????????!</button>
                        <button className = "two_btn" onClick={twoButton}>??????...??? ???????????? ?????? ?????? ????????????!</button>
                        <button className = "three_btn" onClick={threeButton}>????????? ???????????????...?????? ?????? ?????????...? ????????? ????????????!</button>
                        <button className = "four_btn"onClick={fourButton}>zzz...(?????? ?????? ???)</button>
                    </div>
                </div>
            </div>
        );
        case 4 : return (
            <div className="Test_area">
                <div className="test_title">
                    ???????????? ?????????
                </div>
                <div className="status">
                <div className="back">
                        <button className="back_btn" onClick={PageBack}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                    </div>
                    <div className = "statusBar">
                        <div className = "done" style={{width:`${100 / 11 * (Page)}%`}} />
                    </div>
                    <div className="statusBar_Num">
                        {Page} / 11
                    </div>
                </div>
                <div className="content_box">
                        <div className="subject">
                            <span className="subject1">????????? ?????? ????????????...</span>
                            <span className="subject2"></span>
                        </div>
                    <div className="btn_box">
                        <button className = "one_btn" onClick={oneButton}>???...??????...?????? ?????????</button>
                        <button className = "two_btn" onClick={twoButton}>????????? ????????? ??????... ???????????? ????????? ????????????...??????</button>
                        <button className = "three_btn" onClick={threeButton}>????????????. ????????? ?????? ????????????</button>
                        <button className = "four_btn"onClick={fourButton}>?????? ?????? ?????? ?????? ??????...</button>
                    </div>
                </div>
            </div>
        );
        case 5 : return (
            <div className="Test_area">
                <div className="test_title">
                    ???????????? ?????????
                </div>
                <div className="status">
                <div className="back">
                        <button className="back_btn" onClick={PageBack}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                    </div>
                    <div className = "statusBar">
                        <div className = "done" style={{width:`${100 / 11 * (Page)}%`}} />
                    </div>
                    <div className="statusBar_Num">
                        {Page} / 11
                    </div>
                </div>
                <div className="content_box">
                        <div className="subject">
                            <span className="subject1">???????????? ????????????!!!</span>
                            <span className="subject2">?????? ??????????????? ?????????!</span>
                        </div>
                    <div className="btn_box">
                        <button className = "one_btn" onClick={oneButton}>?????? ????????????????! ???????????? ?????? ??????????! ??? ????????????!</button>
                        <button className = "two_btn" onClick={twoButton}>??????????????? ?????? ??? ????????? ???????????????</button>
                        <button className = "three_btn" onClick={threeButton}>???????????? ??? ?????????...????????????!</button>
                        <button className = "four_btn"onClick={fourButton}>zzz....(????????? ?????? ???)</button>
                    </div>
                </div>
            </div>
        );
        case 6 : return (
            <div className="Test_area">
                <div className="test_title">
                    ???????????? ?????????
                </div>
                <div className="status">
                <div className="back">
                        <button className="back_btn" onClick={PageBack}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                    </div>
                    <div className = "statusBar">
                        <div className = "done" style={{width:`${100 / 11 * (Page)}%`}} />
                    </div>
                    <div className="statusBar_Num">
                        {Page} / 11
                    </div>
                </div>
                <div className="content_box">
                        <div className="subject">
                            <span className="subject1">????????? ????????? ????????? ????????????!</span>
                            <span className="subject2">?????? ??????????</span>
                        </div>
                    <div className="btn_box">
                        <button className = "one_btn" onClick={oneButton}>???? ?????? ?????? ????????????? ?????? ??????</button>
                        <button className = "two_btn" onClick={twoButton}>???...??????? (?????? ?????????)</button>
                        <button className = "three_btn" onClick={threeButton}>??????????????? ????????? ???????????? ????????????</button>
                        <button className = "four_btn"onClick={fourButton}>?????? ?????? ???????????? ??? ?????? ??????</button>
                    </div>
                </div>
            </div>
        );
        case 7 : return (
            <div className="Test_area">
                <div className="test_title">
                    ???????????? ?????????
                </div>
                <div className="status">
                <div className="back">
                        <button className="back_btn" onClick={PageBack}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                    </div>
                    <div className = "statusBar">
                        <div className = "done" style={{width:`${100 / 11 * (Page)}%`}} />
                    </div>
                    <div className="statusBar_Num">
                        {Page} / 11
                    </div>
                </div>
                <div className="content_box">
                        <div className="subject">
                            <span className="subject1">????????? ????????? ?????? ??? ?????????!</span>
                            <span className="subject2">????????? ??????????????? ??????????</span>
                        </div>
                    <div className="btn_box">
                        <button className = "one_btn" onClick={oneButton}>???????????? ?????? ????????? ?????? ????????????!</button>
                        <button className = "two_btn" onClick={twoButton}>??????????????? ?????????!</button>
                        <button className = "three_btn" onClick={threeButton}>?????? ????????? ?????? ????????? ????????????</button>
                        <button className = "four_btn"onClick={fourButton}>?????? ????????? ????????????...</button>
                    </div>
                </div>
            </div>
        );
        case 8 : return (
            <div className="Test_area">
                <div className="test_title">
                    ???????????? ?????????
                </div>
                <div className="status">
                <div className="back">
                        <button className="back_btn" onClick={PageBack}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                    </div>
                    <div className = "statusBar">
                        <div className = "done" style={{width:`${100 / 11 * (Page)}%`}} />
                    </div>
                    <div className="statusBar_Num">
                        {Page} / 11
                    </div>
                </div>
                <div className="content_box">
                        <div className="subject">
                            <span className="subject1">?????? ??? ????????? ??????....</span>
                            <span className="subject2"></span>
                        </div>
                    <div className="btn_box">
                        <button className = "one_btn" onClick={oneButton}>?????????~!~! ??? ?????????!</button>
                        <button className = "two_btn" onClick={twoButton}>??????????????? ?????????</button>
                        <button className = "three_btn" onClick={threeButton}>????????? ?????? ?????????..</button>
                        <button className = "four_btn"onClick={fourButton}>?????????...</button>
                    </div>
                </div>
            </div>
        );
        case 9 : return (
            <div className="Test_area">
                <div className="test_title">
                    ???????????? ?????????
                </div>
                <div className="status">
                <div className="back">
                        <button className="back_btn" onClick={PageBack}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                    </div>
                    <div className = "statusBar">
                        <div className = "done" style={{width:`${100 / 11 * (Page)}%`}} />
                    </div>
                    <div className="statusBar_Num">
                        {Page} / 11
                    </div>
                </div>
                <div className="content_box">
                        <div className="subject">
                            <span className="subject1">???????????? ????????? ???</span>
                            <span className="subject2">????????? ??????????</span>
                        </div>
                    <div className="btn_box">
                        <button className = "one_btn" onClick={oneButton}>50% ??????!</button>
                        <button className = "two_btn" onClick={twoButton}>20% ??????!</button>
                        <button className = "three_btn" onClick={threeButton}>5% ??????!</button>
                        <button className = "four_btn"onClick={fourButton}>????????? ????????? ?????? ????????????!</button>
                    </div>
                </div>
            </div>
        );
        case 10 : return (
            <div className="Test_area">
                <div className="test_title">
                    ???????????? ?????????
                </div>
                <div className="status">
                <div className="back">
                        <button className="back_btn" onClick={PageBack}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                    </div>
                    <div className = "statusBar">
                        <div className = "done" style={{width:`${100 / 11 * (Page)}%`}} />
                    </div>
                    <div className="statusBar_Num">
                        {Page} / 11
                    </div>
                </div>
                <div className="content_box">
                        <div className="subject">
                            <span className="subject1">?????? ?????????</span>
                            <span className="subject2">????????? ???????????? ???????</span>
                        </div>
                    <div className="btn_box">
                        <button className = "one_btn" onClick={oneButton}>???????????? ?????? ?????????</button>
                        <button className = "two_btn" onClick={twoButton}>5?????? ????????????!</button>
                        <button className = "three_btn" onClick={threeButton}>1????</button>
                        <button className = "four_btn"onClick={fourButton}>?????? ??????..????????? ?????? ?????? ??????!</button>
                    </div>
                </div>
            </div>
        );
        case 11 : return (
            <div className="Test_area">
                <div className="test_title">
                    ???????????? ?????????
                </div>
                <div className="status">
                <div className="back">
                        <button className="back_btn" onClick={PageBack}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                    </div>
                    <div className = "statusBar">
                        <div className = "done" style={{width:`${100 / 11 * (Page)}%`}} />
                    </div>
                    <div className="statusBar_Num">
                        {Page} / 11
                    </div>
                </div>
                <div className="content_box">
                        <div className="subject">
                            <span className="subject1">??? ?????? ????????? ?????? ?????????...</span>
                            <span className="subject2">?????? ??????????</span>
                        </div>
                    <div className="btn_box">
                            <button className = "one_btn" onClick={oneButton}>????????? ????????? ????????? ???????????????!</button>
                            <button className = "two_btn" onClick={twoButton}>????????? ?????????! ????????????</button>
                            <button className = "three_btn" onClick={threeButton}>?????? ?????? ??????</button>
                            <button className = "four_btn"onClick={fourButton}>????????? ?????? ????????????! ??????!</button>
                    </div>
                </div>
            </div>
        );
        
        default : return (
            <div>none</div>
        )
    }
    
}

export default Test;