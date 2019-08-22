const service = require('../service');

module.exports = function(app) {
  /**
   * Endpoint to be call from the client side
   */
  app.post('/api/message', function(req, res) {
    if (!service.getWorkspaceId()) {
      return res.json({
        output: {
          text: "The app has not been configured with a workspace id parameter. a workspace with the name 'Bank_Simple' will be used, or a new workspace will be created"
        }
      });
    }
    const payload = {
      workspace_id: service.getWorkspaceId(),
      context: req.body.context || {},
      input: req.body.input || {}
    };

    // Send the input to the assistant service
    service.getAssistantV1().message(payload, function(err, data) {
      if (err) {
        return res.status(err.code || 500).json(err);
      }
      return res.json(data);
    });
  });
}
