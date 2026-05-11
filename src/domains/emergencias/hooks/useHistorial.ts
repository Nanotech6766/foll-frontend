import { useState, useEffect } from 'react';
import type { EventoCaida } from '../models/evento.model';

export const useHistorial = () => {
  const [eventos, setEventos] = useState<EventoCaida[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Estado para el evento seleccionado (panel derecho)
  const [eventoSeleccionado, setEventoSeleccionado] = useState<EventoCaida | null>(null);

  useEffect(() => {
    const fetchEventos = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 600)); // Simulación API Gateway

      const mockData: EventoCaida[] = [
        {
          id: '1', ref: '#EVT-84729', fecha: '12 Oct 2026', hora: '14:30 hrs',
          paciente: 'Rosa Martínez', tipo: 'Emergencia Real', tiempoRespuesta: '2m 14s',
          ubicacion: 'Sala de estar, Residencia Principal',
          observaciones: 'Paciente reportó pérdida de equilibrio al intentar levantarse del sillón. No se registran contusiones severas en la primera evaluación. Signos vitales estables a la llegada del cuidador. Se recomienda revisión de presión arterial en la próxima visita.'
        },
        {
          id: '2', ref: '#EVT-84730', fecha: '10 Oct 2026', hora: '09:15 hrs',
          paciente: 'Carlos Vega', tipo: 'Falso Positivo', ubicacion: 'Pasillo central',
          observaciones: 'Movimiento brusco al agacharse a recoger un objeto. El sistema filtró correctamente tras 5 segundos de validación.'
        },
        {
          id: '3', ref: '#EVT-84731', fecha: '01 Oct 2026', hora: '11:40 hrs',
          paciente: 'Elena Torres', tipo: 'Falso Positivo', ubicacion: 'Jardín exterior',
          observaciones: 'Sensor detectó anomalía menor en el patrón de marcha. Descartado automáticamente.'
        }
      ];

      setEventos(mockData);
      setEventoSeleccionado(mockData[0]); // Seleccionamos el primero por defecto
      setIsLoading(false);
    };

    fetchEventos();
  }, []);

  const seleccionarEvento = (evento: EventoCaida) => {
    setEventoSeleccionado(evento);
  };

  return {
    eventos,
    isLoading,
    detalle: {
      eventoSeleccionado,
      seleccionarEvento
    }
  };
};