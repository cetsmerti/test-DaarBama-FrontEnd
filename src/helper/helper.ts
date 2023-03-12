
export const sliceData = (data: string) => {
	return data?.slice(0, 10)?.replaceAll('-', ' ')
}