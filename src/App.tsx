import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
  example: string;
  exampleRequired: string;
}

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>({
    defaultValues: {
      example: "",
      exampleRequired: ""
    }
  });

  const onSubmit: SubmitHandler<IFormInput> = data => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email:</label>
      <input
        {...register("example", {
          required: "Insira um email válido",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
            message: "Insira um email válido"
          }
        })}
        defaultValue="test"
      />
      {errors.example && <p>{errors.example.message}</p>}

      <label>Senha:</label>
      <input
        type="password"
        {...register("exampleRequired", {
          required: "A senha é obrigatória",
          minLength: {
            value: 6,
            message: "A senha deve ter pelo menos 6 caracteres"
          }
        })}
      />
      {errors.exampleRequired && <p>{errors.exampleRequired.message}</p>}

      <input type="submit" />
    </form>
  );
}
