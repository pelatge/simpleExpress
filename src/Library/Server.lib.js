class factoryServer{
	constructor(){
		this.create = (mode) => {
			let server;
			if(argv.mode == 'development') server = new devServer();
			else if(argv.mode == 'production') server = new prodServer();

			return server;
		}
	}
}