import { prop, Typegoose } from '@hasezoey/typegoose';

export class URL extends Typegoose {
    @prop({ required: true })
    hash: String

    @prop({ required: true })
    originURL: string

    @prop({ required: true })
    shortURL: String
}

export const URLModel = new URL().getModelForClass(URL);