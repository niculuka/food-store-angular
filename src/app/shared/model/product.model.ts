import { Category } from "../enums/food.enum";

export class Product {
    productId: number | undefined;
    name: string = "";
    linkName: string = "";
    description: string = "";
    category!: Category;
    image: string = "";
    price: number = 0;
    createTime: Date = new Date();

    constructor(
        productId?: number,
        name: string = "",
        linkName: string = "",
        description: string = "",
        category: Category = Category.MENU,
        image: string = "",
        price: number = 0
    ) {
        this.productId = productId;
        this.name = name;
        this.linkName = linkName;
        this.description = description;
        this.category = category;
        this.image = image;
        this.price = price;
    }


}
