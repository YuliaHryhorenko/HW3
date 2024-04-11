//https://form.jotform.com/241013014291338
{
    function setValuesWithDelay(delay, elementsConfig) {
        setTimeout(() => {
            elementsConfig.forEach(({ xpath, value }) => {
                const xpathResult = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
                if (xpathResult.singleNodeValue) {
                    const element = xpathResult.singleNodeValue;
                    if (['input', 'textarea'].includes(element.tagName.toLowerCase())) {
                        element.value = value;
                        element.dispatchEvent(new Event('input', { bubbles: true }));
                    } else if (element.tagName.toLowerCase() === 'select') {
                        element.value = value;
                        element.dispatchEvent(new Event('change', { bubbles: true }));
                    }
                } else {
                    console.warn(`Element not found for XPath: ${xpath}`);
                }
            });
        }, delay);
    }

    const elementsToSet = [
    { xpath: "//input[@id='first_9']", value: "Anton" },
    { xpath: "//input[@id='last_9']", value: "LastName" },
    { xpath: "//input[@id='input_10']", value: "10" },
    { xpath: "//input[@id='input_3']", value: "test" },
    { xpath: "//select[@id='input_4_day']", value: "15" },
    { xpath: "//select[@id='input_4_month']", value: "April" },
    { xpath: "//select[@id='input_4_year']", value: "2021" },
    { xpath: "//select[@id='input_5_day']", value: "1" },
    { xpath: "//select[@id='input_5_month']", value: "January" },
    { xpath: "//select[@id='input_5_year']", value: "2022" }
    ];

    setValuesWithDelay(2000, elementsToSet);
}
