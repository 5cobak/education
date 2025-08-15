import { memo } from 'react';
import { ArticleBLockTextType } from 'src/entities/Article/types';
import { Text } from 'src/shared/ui/Text';

interface Props {
    block: ArticleBLockTextType;
}

export const ArticleTextBlock = memo((props: Props) => {
    const { block } = props;

    return (
        <div>
            <Text title={block.title} size="l">
                {block.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
            </Text>
        </div>
    );
});

ArticleTextBlock.displayName = 'ArticleTextBlock';
