const DisplayEmojis = ({ emojiShortcodesList }) => {
  return (
    <>
      {Array.from(emojiShortcodesList).map((shortcodes, index) => {
        return (
          <span key={index} className="pr-1">
            <em-emoji
              shortcodes={shortcodes}
              set="twitter"
              size="1.3em"
            ></em-emoji>
          </span>
        );
      })}
    </>
  );
};

export default DisplayEmojis;
