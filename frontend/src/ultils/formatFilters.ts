// utils/formatFilters.ts

export const formatPriorityToFrontend = (priority: string): string => {
  switch (priority) {
    case "ALTA":
      return "Alta";
    case "MEDIA":
      return "Média";
    case "BAIXA":
      return "Baixa";
    case "TODAS":
    default:
      return "Todas";
  }
};

export const formatStatusToFrontend = (status: string): string => {
  switch (status) {
    case "NAO_INICIADA":
      return "Não Iniciada";
    case "EM_ANDAMENTO":
      return "Em Andamento";
    case "FINALIZADA":
      return "Finalizada";
    default:
      return "";
  }
};

// Converte do formato do Frontend para o Backend (ex: Média -> MEDIA)
export const formatPriorityToBackend = (priority: string): string => {
  switch (priority) {
    case "Alta":
      return "ALTA";
    case "Média":
      return "MEDIA";
    case "Baixa":
      return "BAIXA";
    case "Todas":
    default:
      return "";
  }
};

export const formatStatusToBackend = (status: string): string => {
  switch (status) {
    case "Não Iniciada":
      return "NAO_INICIADA";
    case "Em Andamento":
      return "EM_ANDAMENTO";
    case "Finalizada":
      return "FINALIZADA";
    default:
      return "";
  }
};
