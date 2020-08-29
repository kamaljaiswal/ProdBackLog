var data = [
  { item: 'get milk' },
  { item: 'walk the  dog' },
  { item: 'NodeJs' },
];
module.exports = function (app) {
  app.get('/backlog', function (req, resp) {
    resp.render('backlog', { list: data });
  });
};
