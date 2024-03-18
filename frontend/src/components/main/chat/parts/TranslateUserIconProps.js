const TranslateUserIconProps=(iconText)=>{
    // iconTextをUseIconコンポーネントのprops型に変換
    const preUserIconData=iconText.slice(1,iconText.length-1)
    const userIconDataList=preUserIconData.split(";");
    return {image:userIconDataList[0],color:userIconDataList[1]};
};

export default TranslateUserIconProps;