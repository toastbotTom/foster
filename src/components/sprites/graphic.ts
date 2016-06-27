/// <reference path="./../../component.ts"/>
class Graphic extends Component
{

	public texture:Texture;	
	public crop:Rectangle;
	public scale:Vector = new Vector(1, 1);
	public origin:Vector = new Vector(0, 0);
	public rotation:number = 0;
	public flipX:boolean = false;
	public flipY:boolean = false;
	public color:Color = Color.white;
	public alpha:number = 1;
	
	public get width() { return this.crop ? this.crop.width : (this.texture ? this.texture.width : 0); }
	public get height() { return this.crop ? this.crop.height : (this.texture ? this.texture.height : 0); }
	
	constructor(texture:Texture)
	{
		super();
		
		if (texture != null)
		{
			this.texture = texture;
			this.crop = new Rectangle(0, 0, texture.width, texture.height);
		}
	}
	
	public render(camera:Camera):void
	{
		Engine.graphics.texture
		(
			this.texture, 
			this.scenePosition.x,
			this.scenePosition.y, 
			this.crop, 
			this.color.mult(this.alpha), 
			this.origin, 
			this.scale, 
			this.rotation, 
			this.flipX, 
			this.flipY
		);
	}
}