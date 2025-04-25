import React, {Dispatch, SetStateAction} from "react";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
  DragEndEvent,
} from "@dnd-kit/core";
import {SortableContext, rectSortingStrategy, useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";
import Image from "next/image";
import {Trash2} from "lucide-react";

interface Props {
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
}

const ImageReorder = ({images, setImages}: Props) => {
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const {active, over} = event;

    if (!over || active.id === over.id) return;

    const oldIndex = images.findIndex((img) => img === active.id);
    const newIndex = images.findIndex((img) => img === over.id);

    const updatedImages = [...images];
    const [movedImage] = updatedImages.splice(oldIndex, 1);

    updatedImages.splice(newIndex, 0, movedImage);

    setImages(updatedImages);
  };

  return (
    <DndContext collisionDetection={closestCenter} sensors={sensors} onDragEnd={handleDragEnd}>
      <SortableContext items={images} strategy={rectSortingStrategy}>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-5 pb-8">
          {images.map((img) => (
            <SortableImage key={img} img={img} setImages={setImages} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

const SortableImage = ({
  img,
  setImages,
}: {
  img: string;
  setImages: Dispatch<SetStateAction<string[]>>;
}) => {
  const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id: img});

  const removeImage = (item: string) => {
    setImages((prevState) => {
      return prevState.filter((state) => item !== state);
    });
  };

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    borderRadius: "8px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
  };

  return (
    <div className="aspect-square relative" style={style}>
      <Image fill alt="Property image" src={img} />
      <div
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        className="absolute h-full bottom-0 left-0 w-full cursor-grab"
      />
      <button
        className="absolute top-1 right-1 lg:top-2 lg:right-2"
        type="button"
        onClick={() => removeImage(img)}
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
};

export default ImageReorder;
