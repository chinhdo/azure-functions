module.exports = async function (context, req) {
  try {
    const msParam = req.query.ms || (req.body && req.body.ms);

    if (msParam) {
      let ms = parseInt(msParam);
      if (ms > 5000) {
        throw "Sorry you can only sleep up to 5000ms.";
      }
      await sleep(ms);
      context.res = {
        // status: 200, /* Defaults to 200 */
        body: { slept: ms },
      };
    } else {
      context.res = {
        status: 400,
        body: {
          msg:
            "Please pass ms (milliseconds) on the query string or in the request body.",
        },
      };
    }
  } catch (error) {
    console.error(error);
    context.res = {
      status: 500,
      body: {
        msg: error
      },
    };
  }
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
