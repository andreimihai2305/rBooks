function titleToLink(title) {
    let link = title.toLowerCase().replaceAll(' ', '-');
    link = link.replaceAll(',', '');
    return link;
}

export default titleToLink;