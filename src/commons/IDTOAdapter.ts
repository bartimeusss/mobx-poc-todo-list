export interface IDTOAdapter<TEntity, TViewDTO, TCreateDTO, TUpdateDTO = TCreateDTO> {
    fromDTO(dto: TViewDTO): TEntity
    toCreateDTO(entity: TEntity): TCreateDTO
    toUpdateDTO(entity: TEntity): TUpdateDTO
}
