const MessageDataController = require('dc-message')

class EmailMessageDataController extends MessageDataController {

	constructor(model){
		model = model || {};
		super(model)

		this.sender = model.sender;
		this.recipient = model.recipient;
		this.about = model.about;
		this.text = model.text;
		this.dateSent = model.dateSent;
	}

	get sender(){ return this.model.sender }
	set sender(value){ this.model.sender = value }

	get recipient(){ return this.model.recipient }
	set recipient(value){ this.model.recipient = value }

	get about(){ return this.model.about }
	set about(value){ this.model.about = value }

	get text(){ return this.model.text }
	set text(value){ this.model.text = value }

	get dateSent(){ return this.model.dateSent }
	set dateSent(value){ this.model.dateSent = value }
}

module.exports = EmailMessageDataController;
