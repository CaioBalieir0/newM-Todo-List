export default function formatDate(data: string): string {
  const novaData = new Date(data);
  const dataFormatada = novaData.toLocaleString("pt-br", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return dataFormatada;
}
