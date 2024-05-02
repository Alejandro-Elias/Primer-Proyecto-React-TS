import { Tarea } from "./tarea";

type ListaTarea = {
    listaTareas: string[];
    borrarTarea: (index: number) => void;
};

export const ListaDeTareas = ({ listaTareas, borrarTarea }: ListaTarea) => {
    return (
        <div className="taskList">
            {listaTareas.map((tarea: string, index: number) => (
                <Tarea key={tarea} tarea={tarea} borrarTarea={() => borrarTarea(index)} />
            ))}
        </div>
    );
};
