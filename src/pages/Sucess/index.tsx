import { useNavigate, useParams } from "react-router-dom";
import { Container, Inner, Title, SubTitle} from "./styled";
import { Head } from "../../components/Head";
import { useCart } from "../../hooks/useCart";

export default function SuccessPage() {
  const { customerId } = useParams();
  const navigate = useNavigate();
  const { newcustomer } = useCart();

  function goToFormularioPage() {
    newcustomer.splice(0,1);
    navigate('/formulario');
  }

  return (
    <Container>
      <Head title='Cliente trabalhado com sucesso!'/>
      <Inner>
        <Title>Cliente trabalhado com sucesso!</Title>
        <p>
          Número do cliente<code> #{customerId}</code>
        </p>
        <SubTitle>Dados de contato da loja:</SubTitle>
        {
          newcustomer.map((customer) => (
            <ul key={customer.email}>
              <li key={customer.fullName}>{customer.fullName}</li>
              <li key={customer.email}>{customer.email}</li>
              <li key={customer.mobile}>{customer.mobile}</li>
              <li key={customer.document}>{customer.document}</li>
            </ul>
          ))
        }
        <br/>
        <button onClick={goToFormularioPage}>retornar à página principal</button>
      </Inner>
    </Container>
  )
}
