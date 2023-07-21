import ImageButton from "../Buttons/ImageButton";
import Container from "../Container/Container";
import FormHeader from "../FormHeader/FormHeader";
import english from "@/assets/icon/english.svg";
import turkish from "@/assets/icon/turkish.svg";
import InputField from "../InputField/InputField";
import Dropdown from "../Dropdown/Dropdown";
import DropdownItem from "../Dropdown/DropdownItem";
import TextArea from "../InputField/TextArea";

const Form1 = () => {
  return (
    <Container>
      <div>
        <FormHeader
          title="Form title"
          subtitle="Form title Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim."
        />
        <div className="flex gap-2 items-center my-5 ">
          <ImageButton variant="fill" image={english}>
            English
          </ImageButton>
          <ImageButton variant="outline" image={turkish}>
            Turkish
          </ImageButton>
        </div>

        <form className="flex  flex-col">
          <InputField
            placeholder="Placeholder"
            type="text"
            label="Label title"
          />
          <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
            <Dropdown label="Title">
              <DropdownItem value={1}>Option1</DropdownItem>
              <DropdownItem value={2}>Option1</DropdownItem>
              <DropdownItem value={3}>Option1</DropdownItem>
              <DropdownItem value={4}>Option1</DropdownItem>
              <DropdownItem value={5}>Option1</DropdownItem>
            </Dropdown>
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
export default Form1;
