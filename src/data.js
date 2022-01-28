// estas funciones son de ejemplo

export const example = () => {
    return 'example';
};


export const anotherExample = () => {
    return 'OMG';
};

//-- Función para organizar la data en orden alfabetico de la A-Z --//

export const sortAZ = (dataMovie) => {
    return dataMovie.sort((a, b) => {

        if (a.title < b.title) {
            return -1;
        } else {
            return 1;
        }
    });
};
