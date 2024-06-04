import createElement from '../helpers/domHelper';

export function createFighterImage(fighter) {
    const { source, name } = fighter;
    const attributes = {
        src: source,
        title: name,
        alt: name
    };
    const imgElement = createElement({
        tagName: 'img',
        className: 'fighter-preview___img',
        attributes
    });
    return imgElement;
}

export function createFighterPreview(fighter, position) {
    const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
    const fighterElement = createElement({
        tagName: 'div',
        className: `fighter-preview___root ${positionClassName}`
    });
    // todo: show fighter info (image, name, health, etc.)
    if (fighter) {
        const { name, health, attack, defense, source } = fighter;
        const infoElement = createElement({
            tagName: 'p',
            className: ''
        });
        const imgElement = createFighterImage({ name, source });
        infoElement.innerHTML = `health: ${health} attack: ${attack} defense: ${defense}`;
        fighterElement.appendChild(infoElement);
        fighterElement.appendChild(imgElement);
    }

    return fighterElement;
}
