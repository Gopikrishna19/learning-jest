const ID = function* () {
    while (true) {
        yield `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
};

const generator = ID();

export const generateId = () => generator.next().value;
