import Container from "../Container/Container";
import FormHeader from "../FormHeader/FormHeader";
import InputField from "../InputField/InputField";
import TextArea from "../InputField/TextArea";
import Dropdown from "../Dropdown/Dropdown";
import DropdownItem from "../Dropdown/DropdownItem";
const Form2 = () => {
  return (
    <Container>
      <div>
        <FormHeader
          title="Form title"
          subtitle="Form title Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim."
        />

        <form className="flex  flex-col">
          <InputField
            placeholder="Placeholder"
            type="text"
            label="Label title"
          />

          <Dropdown label="Title">
            <DropdownItem value={1}>Option1</DropdownItem>
            <DropdownItem value={2}>Option1</DropdownItem>
            <DropdownItem value={3}>Option1</DropdownItem>
            <DropdownItem value={4}>Option1</DropdownItem>
            <DropdownItem value={5}>Option1</DropdownItem>
          </Dropdown>

          <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
            <InputField
              placeholder="Placeholder"
              type="text"
              label="Label title"
            />
            <InputField
              placeholder="Placeholder"
              type="text"
              label="Label title"
            />
          </div>
          <TextArea placeholder="Placeholder" label="Label title" />
        </form>
      </div>
    </Container>
  );
};
export default Form2;
