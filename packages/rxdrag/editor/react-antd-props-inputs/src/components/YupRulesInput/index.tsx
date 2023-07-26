import { Form, Select } from "antd"
import { memo } from "react"
import { YupValidateRules } from "@rxdrag/fieldy-yup-validation"
import { useSettersTranslate } from "@rxdrag/react-core"

export const YupRulesInput = memo((
  props: {
    value?: YupValidateRules,
    onChange?: (value?: YupValidateRules) => void
  }
) => {
  const { value, onChange } = props;
  const t = useSettersTranslate()
  return (
    <>
      <Form.Item label={t('validationType')}>
        <Select
          allowClear
          options={[
            { value: 'email', label: t('email') },
            { value: 'url', label: t('url') },
            { value: 'uuid', label: t('UUID') },
            { value: 'string', label: t('string') },
            { value: 'number', label: t('number') },
            { value: 'date', label: t('date') },
            { value: 'boolean', label: t('boolean') },
            { value: 'array', label: t('array') },
            { value: 'object', label: t('object') },
          ]}
        />
      </Form.Item>
    </>
  )
})