module.exports = async function (context, req) {
  const msg = req.query.msg || (req.body && req.body.msg);

  if (msg) {
    context.res = {
      // status: 200, /* Defaults to 200 */
      body: {
        msg: `Your message '${msg}' was logged.`,
      },
    };
  } else {
    context.res = {
      status: 400,
      body: {
        msg: "'msg' parameter is required.",
      },
    };
  }
};
