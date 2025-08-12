import { memo } from 'react';
import { Text } from 'src/shared/ui/Text';

interface Props {
    title: string;
    paragraphs: string[];
}

export const ArticleTextBlock = memo((props: Props) => {
    const { title, paragraphs } = props;

    return (
        <div>
            <Text title={title} size="l">
                {paragraphs.map((paragraph) => (
                    <Text key={paragraph}>{paragraph}</Text>
                ))}
            </Text>
        </div>
    );
});

ArticleTextBlock.displayName = 'ArticleTextBlock';
