// スラングの情報を取得
export const GetSlangsList=(message)=>{
    const postData=message;
    // firebaseを参照してスラングが含まれてないときは空配列を返す
    const slangsList=
        [
            {shortcodes:":nail_care:",meaning:"I do't care"},
            {shortcodes:":avocado:",meaning:"basic"},
            {shortcodes:":billed_cap:",meaning:"lie"}
        ];
    return slangsList;
};
