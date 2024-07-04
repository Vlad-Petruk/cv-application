import Input from "../Reusable Componets/Input";

function PersonalDetailsInput({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  adress,
  setAdress,
}) {
  return (
    <div className="input-box">
      <Input
        type={"text"}
        value={name}
        onChange={setName}
        id={"fullName"}
        label={"Full name"}
      />
      <Input
        type={"email"}
        value={email}
        onChange={setEmail}
        id={"email"}
        label={"Email"}
      />
      <Input
        type={"number"}
        value={phone}
        onChange={setPhone}
        id={"phoneNumber"}
        label={"Phone"}
      />
      <Input
        type={"text"}
        value={adress}
        onChange={setAdress}
        id={"address"}
        label={"Address"}
      />
    </div>
  );
}

export default PersonalDetailsInput;
