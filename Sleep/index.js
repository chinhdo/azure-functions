module.exports = async function (context, req) {
    if (req.query.ms || (req.body && req.body.ms)) {
        let ms = parseInt(req.query.ms || req.body.ms);
        await sleep(ms);
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Slept for " + ms + " millisecond(s)."
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass ms (milliseconds) on the query string or in the request body."
        };
    }
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));