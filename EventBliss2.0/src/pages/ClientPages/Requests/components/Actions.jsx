import { Button } from "@tremor/react"

export function Actions({ status }) {
  // Verificar si el estado es "in progress" o "denied"
  const showCancelButton = status === "In progress" || status === "Denied";

  return (
    <div>

      {showCancelButton && (
        <Button 
          variant="primary"
          color="red"
        >
          Cancelar
        </Button>
      )}

      {!showCancelButton && (
        <h3>None</h3>
      )}

    </div>
  );
}
