import ContactFage from "../../pages/contacts";
import ListFooter from "../footer/ListFooter";
import header from "../header/header";

const ListContact = () => {
    return `
<div class="product-contact  container-fluid ">
    ${header()}
    ${ContactFage()}
    ${ListFooter()}
</div>
`;
}
export default ListContact;