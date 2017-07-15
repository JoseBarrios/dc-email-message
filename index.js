const Message = require('@josebarrios/message')

class EmailMessage extends Message{

    constructor(model){
      model = model || {};
      super(model)

      //Non-standard
      this.text = model.text;
      this.HTML = model.HTML;
    }

  get text(){ return this.computed.text }
  set text(value){ this.computed.text = value }

  get html(){ return this.computed.HTML }
  set html(value){ this.computed.HTML = value }
  get HTML(){ return this.computed.HTML }
  set HTML(value){ this.computed.HTML = value }
}

module.exports = EmailMessage;
