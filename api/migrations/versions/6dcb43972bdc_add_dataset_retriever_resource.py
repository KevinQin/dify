"""add_dataset_retriever_resource

Revision ID: 6dcb43972bdc
Revises: 4bcffcd64aa4
Create Date: 2023-09-06 16:51:27.385844

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '6dcb43972bdc'
down_revision = '4bcffcd64aa4'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('dataset_retriever_resources',
    sa.Column('id', postgresql.UUID(), server_default=sa.text('uuid_generate_v4()'), nullable=False),
    sa.Column('message_id', postgresql.UUID(), nullable=False),
    sa.Column('position', sa.Integer(), nullable=False),
    sa.Column('dataset_id', postgresql.UUID(), nullable=False),
    sa.Column('dataset_name', sa.Text(), nullable=False),
    sa.Column('document_id', postgresql.UUID(), nullable=False),
    sa.Column('document_name', sa.Text(), nullable=False),
    sa.Column('data_source_type', sa.Text(), nullable=False),
    sa.Column('segment_id', postgresql.UUID(), nullable=False),
    sa.Column('score', sa.Float(), nullable=True),
    sa.Column('content', sa.Text(), nullable=False),
    sa.Column('hit_count', sa.Integer(), nullable=True),
    sa.Column('word_count', sa.Integer(), nullable=True),
    sa.Column('segment_position', sa.Integer(), nullable=True),
    sa.Column('index_node_hash', sa.Text(), nullable=True),
    sa.Column('retriever_from', sa.Text(), nullable=False),
    sa.Column('created_by', postgresql.UUID(), nullable=False),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('CURRENT_TIMESTAMP'), nullable=False),
    sa.PrimaryKeyConstraint('id', name='dataset_retriever_resource_pkey')
    )
    with op.batch_alter_table('dataset_retriever_resources', schema=None) as batch_op:
        batch_op.create_index('dataset_retriever_resource_message_id_idx', ['message_id'], unique=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('dataset_retriever_resources', schema=None) as batch_op:
        batch_op.drop_index('dataset_retriever_resource_message_id_idx')

    op.drop_table('dataset_retriever_resources')
    # ### end Alembic commands ###
