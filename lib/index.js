const lib = {
  getTimeFormat: (time) => {
    const currentMinute = Math.floor(time / 60);
    const currentSecond = Math.floor(time % 60);
    return (
      currentMinute +
      ":" +
      (currentSecond < 10 ? "0" + currentSecond : currentSecond)
    );
  },
};

export default lib;
