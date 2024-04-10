import { Form, Radio } from "antd";

export default function RadioGroupFilter({
  options = [],
  name = "",
  defaultValue,
}) {
  const formInstance = Form.useFormInstance();
  return (
    <Radio.Group
      name={name}
      defaultValue={defaultValue}
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "5px",
      }}
      onChange={(event) => formInstance.setFieldValue(name, event.target.value)}
    >
      {options.map(({ value, label }) => (
        <Radio key={value} value={value}>
          {label}
        </Radio>
      ))}
    </Radio.Group>
  );
}
