import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IMaskInput } from "react-imask";

import { schema, FieldValues } from "./ValidationSchema";

import { Head } from "../../components/Head";
import { PayOrder } from "../../components/OrderCloseAction/PayOrder";

import { Container, Form, Inner } from "./styles";
import { useCart } from "../../hooks/useCart";

export default function Payment() {
  const { payOrder } = useCart()

  const {
    control,
    handleSubmit,    
  } = useForm<FieldValues>({
    resolver: yupResolver(schema)
  })
  const onSubmit: SubmitHandler<FieldValues> = (data) => payOrder(data)  

  return (
    <Container>
      <Head title='Formulario'/>
      <Inner>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h4>Informacoes pessoais</h4>

          <div className="field">
            <label htmlFor='fullName'>nome e sobrenome</label>
            <Controller
              name='fullName'
              control={control}
              render={({ field }) => (
                <input type='text' id='fullName' autoComplete='name' {...field}/>
              )}
            />
          </div>

          <div className="grouped">

            <div className="field">
              <label htmlFor='email'>Email</label>
              <Controller
                name='email'
                control={control}
                render={({ field }) => (
                  <input type='email' id='email' autoComplete='email' {...field}/>
                )}
              />
            </div>

            <div className="field">
              <label htmlFor='mobile'>Celular</label>
              <Controller
                name='mobile'
                control={control}
                render={({ field }) => (
                  <IMaskInput
                    type='tel'
                    id='mobile'
                    autoComplete='phone'
                    mask={'(00) 90000-0000'}
                    {...field}
                  />
                )}
              />
            </div>

            <div className="field">
              <label htmlFor='document'>CPF /CNPJ</label>
              <Controller
                name='document'
                control={control}
                render={({ field }) => (
                  <IMaskInput
                    type='text'
                    id='document'
                    mask={[
                      {mask: '000.000.000-00', maxLength: 11},
                      {mask: '00.000.000/0000-00'}
                    ]}
                    {...field}
                  />
                )}
              />
            </div>
          </div>
          <PayOrder/>
        </Form>
      </Inner>
    </Container>
  )
}
