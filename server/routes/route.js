module.exports = function(app){
  const controller = require("../controllers/controller");
  app.get("/", controller.index);
  app.get("/new/:name", controller.new);
  app.get("/remove/:name", controller.remove);
  app.get("/:name", controller.show);
}