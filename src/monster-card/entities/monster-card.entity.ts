export class MonsterCard {
    id: string
    name: string
    type: string
    frameType: string
    desc: string
    atk: number
    def: number
    level: number
    race: string
    attribute: string
    card_sets: Card_Set[]
    card_images: Card_Image[]
    card_prices: Card_Price[]
}

export interface Card_Set {
    set_name: string
    set_code: string
    set_rarity: string
    set_rarity_code: string
    set_price: string
}

export interface Card_Image {
    id: number
    image_url: string
    image_url_small: string
    image_url_cropped: string
}

export interface Card_Price {
    cardmarket_price: string
    tcgplayer_price: string
    ebay_price: string
    amazon_price: string
    coolstuffinc_price: string
}
