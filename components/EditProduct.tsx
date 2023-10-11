"use client"
import React, { useState, useEffect } from 'react';

function EditProduct({ product }: any) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [img, setImg] = useState('');
    const [categoria, setCategoria] = useState('');
    const id = product.id;

    useEffect(() => {
        setName(product.name || '');
        setDescription(product.description || '');
        setPrice(product.price || '');
        setImg(product.img || '');
        setCategoria(product.categoria || '')
    }, [product]);

    const handleEdit = (e: any) => {

        e.preventDefault()

        const updatedProduct = {
            name,
            description,
            price,
            img,
            categoria
        };
        const requestBody = JSON.stringify(updatedProduct);
        fetch(`/api/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: requestBody,
        })
    };

    return (
        <div>
            <form onSubmit={handleEdit} className="flex flex-col gap-4">
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    name="description"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="text"
                    name="price"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    type="text"
                    name="img"
                    id="img"
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                />
                <label>
                    <input type="radio" name="categoria" value="Ropa" 
                        onChange={(e) => setCategoria(e.target.value)}/>
                    Ropa
                </label>

                <label>
                    <input type="radio" name="categoria" value="Zapatillas"                         
                        onChange={(e) => setCategoria(e.target.value)}/>
                    Zapatillas
                </label>

                <label>
                    <input type="radio" name="categoria" value="Collares" 
                        onChange={(e) => setCategoria(e.target.value)}/>
                    Collares
                </label>

                <label>
                    <input type="radio" name="categoria" value="Maquillaje" 
                        onChange={(e) => setCategoria(e.target.value)}/>
                    Maquillaje
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default EditProduct;
