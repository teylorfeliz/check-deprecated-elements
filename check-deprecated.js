/*  Finds deprecated tags (HTML elements) and print them on the console.
    This helps students to make sure that they don't insert or paste a
    deprecated element to their pages. This script is not a replacement
    for HTML validators but a little helper that avoids issues while
    coding without having to constantly validating their pages.
 */
    ;(() =>{
        let elements = document.querySelectorAll('*');
        const deprecatedList = "acronym big center content dir font frame frameset image marquee menuitem nobr noembed noframes param plaintext rb rtc strike tt xmp".split(" ");
        let found = [];
        elements.forEach((elem) => {
            const tag = elem.tagName.toLowerCase();
            if(deprecatedList.includes(tag)) {
                found.push(`<${tag}>, https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${tag}`);
            }
        });
        console.log(`${found.length} deprecated element${found.length !== 0 ? '' : 's'} found.`);
        if(found.length) {
            console.log(found);
        }
    })();