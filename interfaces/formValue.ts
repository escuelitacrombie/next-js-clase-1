export type CategoryInput = {
    connect: {
        id: number
    }
}

export type CategoryValue = {
    id: CategoryInput
    category: string
}

export type FormValue = {
    description?: string;
    name?: string;
    price?: string;
    category?: CategoryInput;
    image?: string;
};