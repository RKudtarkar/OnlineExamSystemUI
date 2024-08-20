export interface ISubject {
    subject_id: number
    subject_name: string
    category_fid: number
    category_id: number
    category_name: string
}

export interface InsertSubject {
    subject_id: number | null
    subject_name: string| null
    category_fid: number| null
}