import DisplayEmojis from "./DisplayEmojis";

const SendMessage = ({ message }) => {
  console.log(message);
  // propsのデータ例
  // message:[':innocent:', ':upside_down_face:', ':kissing_heart:']

  return (
    <div className="message me mb-4 flex text-right">
      <div className="flex-1 px-2">
        <div className="inline-block bg-blue-600 rounded-full p-2 px-6 text-white">
          <span className="flex items-center flex-wrap overflow-auto">
            <DisplayEmojis emojiShortcodesList={message} />
          </span>
        </div>
        {/* <div className="pr-4"><small className="text-gray-500">15 April</small></div> */}
      </div>
    </div>
  );
};

export default SendMessage;
