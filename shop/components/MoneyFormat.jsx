// from cents to dolars conversion
const numberFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

export default function getFormat({value}) {
    return (
        <span>
            {numberFormat.format(value / 100)}
        </span>
    );
}