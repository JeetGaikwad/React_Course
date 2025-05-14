export default function Tabs({ buttons, children, ButtonContainers = "menu" }) {
  // const ButtonContainers = ButtonContainers;
  return (
    <>
      <ButtonContainers>{buttons}</ButtonContainers>
      {children}
    </>
  );
}
