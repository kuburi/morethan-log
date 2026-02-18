import { NotionAPI } from "notion-client"

export const getRecordMap = async (pageId: string) => {
  const api = new NotionAPI({
apiBaseUrl: "https://tiny-cucumber-590.notion.site/api/v3" //your domain
})
  const recordMap = await api.getPage(pageId)
  return recordMap
}
