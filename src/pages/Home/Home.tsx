import { useTheme } from "../../hooks/useTheme";

export const Home = () => {
  const { toggleTheme } = useTheme();

  return (
    <div>
      <div style={{ margin: "50px" }}>
        <button onClick={toggleTheme}>mudar tema</button>
      </div>
    </div>
  );
};
