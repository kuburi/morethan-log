import { NotionAPI } from "notion-client"

export const getRecordMap = async (pageId: string) => {
  const api = new NotionAPI({
apiBaseUrl: "https://kuburi.notion.site/api/v3" //your domain
})
  const recordMap = await api.getPage(pageId)
  return recordMap
}
